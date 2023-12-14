"use client";

import { Button } from "@/stories/components/Button/Button";
import { Card } from "@/stories/components/Card/Card";
import { Input } from "@/stories/components/Input/Input";
import { Text } from "@/stories/components/Text/Text";
import bbq from "../../../public/icon_bbq.svg";
import people from "../../../public/icon_people.svg";
import money from "../../../public/icon_money.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "@/stories/components/Modal/Modal";
import { listChurras } from "../../utils/mocks";
import { formatDateBr } from "@/utils/format-date";

export default function List() {
  const [churrasStorage, setItems] = useState([]);

  useEffect(() => {
    const churrasStorage = JSON.parse(localStorage.getItem("churras") as any);
    if (churrasStorage) {
      setItems(churrasStorage);
    }
  }, []);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = useRouter();
  const [churras, setChurras] = useState<any[]>(listChurras as any);
  const [churrasName, setChurrasName] = useState<string>("");
  const [churrasDate, setChurrasDate] = useState<string>("R$");

  const addChurras = () => {
    if (churrasName && churrasDate) {
      setChurras([...churras, { name: churrasName, date: churrasDate }]);
      setChurrasName("");
      setChurrasDate("");
      localStorage.setItem(
        "churras",
        JSON.stringify([
          ...churras,
          ...[{ name: churrasName, date: churrasDate, people: [], money: "" }],
        ])
      );
    }
  };

  return (
    <div>
      <main className="flex h-[50vw] flex-col items-center justify-between p-12 relative font-raleway ">
        <div className="flex flex-wrap w-[56%] justify-center gap-5 absolute -top-10">
          {(churrasStorage.length > churras.length
            ? churrasStorage
            : churras
          ).map((item, index) => (
            <Card key={index}>
              <div
                className="cursor-pointer py-8 px-6 "
                onClick={() => {
                  router.push(`detail?id=${index}`);
                }}
              >
                <Text label={formatDateBr(item.date)} fontSize="text-[28px]" />
                <div className="mb-12">
                  <Text
                    label={item.name}
                    fontSize="text-[21px]"
                    fontWeight="font-bold"
                    color="text-[#000000CC]"
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <Image src={people} alt={"Pessoas"} />
                    <span>{item?.people?.length}</span>
                  </div>
                  <div className="flex gap-2">
                    <Image src={money} alt={"Dinheiro"} />
                    <span>{item.money}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          <Card className={"bg-[#F1F1F1]"}>
            <div
              className="cursor-pointer py-8 px-6 flex flex-col justify-center items-center"
              onClick={() => setOpenModal(true)}
            >
              <div className="bg-[#FFD836] w-[90px] h-[90px] flex justify-center rounded-[50px]">
                <Image src={bbq} alt={"Churras"} />
              </div>
              <Text
                label={"Adicionar Churras"}
                fontSize="text-[21px]"
                fontWeight="font-bold"
              />
            </div>
          </Card>
        </div>
      </main>
      {openModal && (
        <Modal closeButton openModal={setOpenModal}>
          <div className="flex flex-col justify-center items-center w-[500px] h-auto p-6 gap-7">
            <Text label="Cadastrar Churras" fontSize="text-[28px]" />
            <div className="flex flex-col gap-6 text-base">
              <Input
                type="text"
                id="Churras"
                label="Churras:"
                placeholder="Nome do churras"
                inputClassName="mb-9 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.20)] [&::-webkit-inner-spin-button]:appearance-none"
                inputValue={churrasName}
                onchange={(e: ChangeEvent<HTMLInputElement>) =>
                  setChurrasName(e.target.value)
                }
                required
              />
              <Input
                type="date"
                id="date"
                label="Data do Churras:"
                inputClassName="mb-9 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.20)] [&::-webkit-inner-spin-button]:appearance-none"
                inputValue={churrasDate}
                onchange={(e: ChangeEvent<HTMLInputElement>) =>
                  setChurrasDate(e.target.value)
                }
                required
              />
            </div>
            <Button
              label={"Cadastrar"}
              backgroundColor="#000000"
              color="#FFFFFF"
              onclick={addChurras as () => void}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
