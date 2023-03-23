import axios from "axios";

interface GptResponse {
  id: string;
  object: "text_completion";
  created: number;
  model: string;
  choices: GptChoice[];
  usage: GptUsage;
}

interface GptChoice {
  text: string;
  index: number;
  logprobs: null;
  finish_reason: string;
}

interface GptUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

interface IGptRequestParams {
  prompt: string;
  max_tokens: number;
  n: number;
  stop: string[];
}

export const gptClient = async (params: any): Promise<GptResponse> => {
  const response = await axios.post<GptResponse>(
    "https://api.openai.com/v1/engines/davinci-codex/completions",
    params,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_CHAT_GPT_KEY}`,
      },
    }
  );

  return response.data;
};
