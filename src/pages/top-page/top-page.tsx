import axios from "axios";
import React, { useState } from "react";
import { Button } from "../../component/atoms/button/button";
import { TextField } from "../../component/atoms/text-field/text-field";
import { gptClient } from "../../libs/gtp-client";
import styles from "../top-page/top-page.module.scss";

export const TopPage = () => {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const fetchCpt = async () => {
    setLoading(true);
    const res = await gptClient({
      prompt: "青森県のオススメを教えてください。",
      max_tokens: 2048,
      // n: 1,
      // stop: ["\n"],
    });
    console.log("GPT Response ===>>>", res);
    setAnswer(res.choices[0].text);
    setLoading(false);
  };
  return (
    <div className={styles.container}>
      <h1>行きたい場所を入力してください</h1>
      <TextField placeholder="行き先" />
      <TextField placeholder="日数" />
      <Button onClick={fetchCpt}>Submit</Button>
      {loading && <>ローディング...</>}
      {answer}
    </div>
  );
};
