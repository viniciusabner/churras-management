"use client";
import { ChangeEvent, useState } from "react";
import { Button } from "@/stories/components/Button/Button";
import { Footer } from "@/stories/components/Footer/Footer";
import { Input } from "@/stories/components/Input/Input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin@admin.com.br" && password === "123456") {
      setError("");
      router.push("/list");
    } else {
      setError("Credenciais inválidas");
    }
  };
  return (
    <main className="flex flex-col h-[64%] items-center justify-between p-12 bg-[#FFD836] relative">
      <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex absolute -top-20">
        <Input
          type="email"
          id="email"
          label="Login"
          placeholder="e-mail"
          inputClassName="mb-9"
          inputValue={username}
          onchange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          required
        />
        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="senha"
          inputClassName="mb-16"
          inputValue={password}
          onchange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          required
        />
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <Button
          label={"Entrar"}
          backgroundColor="#000000"
          color="#FFFFFF"
          onclick={handleSubmit as () => void}
        />

        <Footer className="bg-[#FFD836] mt-[70px]" />
      </div>
    </main>
  );
}
