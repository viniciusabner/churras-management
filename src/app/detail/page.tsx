"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/stories/components/Button/Button";
import { Input } from "@/stories/components/Input/Input";
import { Text } from "@/stories/components/Text/Text";
import people from "../../../public/icon_people.svg";
import money from "../../../public/icon_money.svg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { listChurras } from "../../utils/mocks";
import { formatDateBr } from "@/utils/format-date";

interface DetailProps {
  name: string;
  value: string;
  paid?: boolean;
}

export default function Detail() {
  const [churrasStorage, setChurrasStorage] = useState([]);
  const searchParams = useSearchParams();
  const getId = searchParams.get("id");

  useEffect(() => {
    const churrasStorage = JSON.parse(localStorage.getItem("churras") as any);
    if (churrasStorage) {
      setChurrasStorage(churrasStorage);
    }
  }, []);

  const list = listChurras[getId as any]
    ? listChurras[getId as any]
    : churrasStorage[getId as any];
  const listParticipants = list?.people;
  const [participants, setParticipants] =
    useState<DetailProps[]>(listParticipants);
  const [participantName, setParticipantName] = useState<string>("");
  const [participantValue, setParticipantValue] = useState<string>("R$");

  useEffect(() => {
    if (participants === undefined) {
      setParticipants([]);
    }
  }, [participants]);

  const addParticipant = () => {
    if (participantName && participantValue) {
      setParticipants([
        ...participants,
        { name: participantName, value: participantValue },
      ]);
      setParticipantName("");
      setParticipantValue("");
    }
  };

  const removeParticipant = (index: number, name: string) => {
    setParticipants(participants.filter((_, idx) => idx !== index));
  };

  const somarValores = (participants: DetailProps[]) => {
    let total = 0;

    for (let person of participants) {
      if (person.value) {
        total += parseInt(person.value);
      }
    }

    return total;
  };

  const total = somarValores(participants ? participants : []);

  return (
    <div className="bg-[#FAFAFA]">
      <main className="flex h-[100vw] flex-col items-center justify-between p-12 relative font-raleway bg-[#FAFAFA]">
        <div className=" bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.20)] p-9 absolute -top-20">
          <div className="flex w-full justify-between items-baseline">
            <div className="flex flex-col mb-12">
              <Text
                label={list?.date ? formatDateBr(list?.date) : ""}
                fontSize="text-[28px]"
              />
              <Text
                label={list?.name}
                fontSize="text-[21px]"
                fontWeight="font-bold"
                color="text-[#000000CC]"
              />
              <Text
                label={list?.description}
                fontSize="text-[16px]"
                fontWeight="font-normal"
                color="text-[#000000CC]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 mb-3 text-[21px] font-medium">
                <Image src={people} alt={"Pessoas"} />
                <span>{participants?.length}</span>
              </div>
              <div className="flex gap-2 text-[21px] font-medium">
                <Image src={money} alt={"Dinheiro"} />
                <span>R${total}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-12">
            <Text label="Adicionar Participantes" fontSize="text-[28px]" />
            <div className="flex gap-8 justify-center items-center mt-7">
              <Input
                type="text"
                id="name"
                label="Nome"
                placeholder="Nome"
                inputClassName="mb-9 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.20)]"
                inputValue={participantName}
                onchange={(e: ChangeEvent<HTMLInputElement>) =>
                  setParticipantName(e.target.value)
                }
                required
              />
              <Input
                type="number"
                id="money"
                label="Valor de contribuição"
                placeholder="R$"
                inputClassName="mb-9 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.20)] [&::-webkit-inner-spin-button]:appearance-none"
                inputValue={participantValue}
                onchange={(e: ChangeEvent<HTMLInputElement>) =>
                  setParticipantValue(e.target.value)
                }
                required
              />
              <Button
                label={"Adicionar participante"}
                backgroundColor="#000000"
                color="#FFFFFF"
                onclick={addParticipant as () => void}
              />
            </div>
          </div>
          <Text label="Participantes:" fontSize="text-[28px]" />
          <ul className="w-full mt-12">
            {participants?.map((participant, index) => (
              <li
                key={index}
                className="flex justify-between mb-5 h-[53px] border-b-[#E5C231] border-b border-solid"
              >
                <div className="flex w-full justify-between gap-7">
                  <div className="flex gap-[19px] justify-center items-center">
                    {participant.paid ? (
                      <div className="w-[25px] h-[25px] rounded-[50px] bg-[#FFD836]"></div>
                    ) : (
                      <div className="w-[25px] h-[25px] rounded-[50px] border-2 border-solid border-[#998220]"></div>
                    )}
                    <Text label={participant.name} fontSize="text-[21px]" />
                  </div>
                  <div>
                    {participant.paid ? (
                      <s className="text-[20px]">
                        <Text
                          label={`R$ ${participant.value}`}
                          fontSize="text-[21px]"
                        />
                      </s>
                    ) : (
                      <Text
                        label={`R$ ${participant.value}`}
                        fontSize="text-[21px]"
                      />
                    )}
                  </div>
                </div>
                <div className=" ml-14">
                  <Button
                    label={"Remover"}
                    backgroundColor="#eb4949"
                    color="#FFFFFF"
                    onclick={() => removeParticipant(index, participant.name)}
                    size="small"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
