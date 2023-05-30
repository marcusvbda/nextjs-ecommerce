import { NextResponse } from "next/server";

const list = async () => {
  const arr: { id: number; email: string; description: string }[] = [];

  for (let i = 1; i <= 25; i++) {
    const ob = {
      id: i,
      description: `Descrição do item ${i}`,
      email: `email${i}@test.com`,
    };

    arr.push(ob);
  }
  return NextResponse.json(arr);
};

export { list as GET };
