require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: "org-Bk8GBknNQY6z2Ld0ZH8DL9Vo",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function foo() {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "never gonna give you up" }],
  });
  console.log(response.data.choices[0].message);
}

foo();