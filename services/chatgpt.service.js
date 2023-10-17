const { Configuration, OpenAIApi } = require("openai");
// const DbService = require('./db.service');
require('dotenv').config();
const OPENAI_KEY = process.env['OPENAI_KEY'];
    const configuration = new Configuration({
      apiKey: OPENAI_KEY,
    });
    const openai = new OpenAIApi(configuration);
class ChatGPTService {
  rolePlayIntroduction =
    "Sau đây là cuộc trò chuyện với một trợ lý AI." +
    "Trợ lý này rất hữu ích, sáng tạo, thông minh và rất thân thiện." +
    "\n\nNgười dùng: Xin chào, Bạn là ai ?\nAI: Tôi là một AI được tạo bởi OpenAI. Hôm nay tôi giúp gì được cho bạn?"
  async generateCompletion(prompt) {

    let fullPrompt = this.rolePlayIntroduction + "\n";
    fullPrompt += `Người dùng: ${prompt}\n`;
    fullPrompt += `AI: `;
    // Gửi request về OpenAI Platform để tạo text completion
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      // model: "gpt-3.5-turbo-0301",
      prompt: fullPrompt,
      temperature: 0.7,
      max_tokens: 2500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: [" Người dùng:", " AI:"]
    });
    const responseMessage = completion.data.choices[0].text.replace(
      /^\s+|\s+$/g,
      ""
    );
    // await DbService.createNewMessage(user, prompt, responseMessage);
    return responseMessage;
  }

  async generateImage(prompt) {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "256x256",
    });
    const responseMessage = response.data.data[0].url;
    return responseMessage;
  }
  async checkGrammar(prompt) {
    const response = await openai.createChatCompletion({
       model: "gpt-3.5-turbo-0301",
      messages: [{role: "user", content:`Correct this to standard English: ${prompt}`}],
    });
    const responseMessage = response.data.choices[0].message.content.replace(
      /^\s+|\s+$/g,
      ""
    );
    return responseMessage;
  }
    async translate(prompt) {
    const response = await openai.createChatCompletion({
       model: "gpt-3.5-turbo-0301",
      messages: [{role: "user", content: `Translate the following English text to Vietnamese: ${prompt}`}],
    });
    const responseMessage = response.data.choices[0].message.content.replace(
      /^\s+|\s+$/g,
      ""
    );
    return responseMessage;
  }
    async gptTurbo (prompt) {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      messages: [{role: "user", content: prompt}],
    });
    const responseMessage=completion.data.choices[0].message.content.replace(
          /^\s+|\s+$/g,
          ""
        );
    return responseMessage;
    }

}

module.exports = new ChatGPTService();

