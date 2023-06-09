import { NextResponse } from "next/server";

const create = async (req: any) => {
  const body = await req.json();
  return NextResponse.json(body);
};

const list = async () => {
  const arr: { id: number; value: number; description: string }[] = [];

  for (let i = 1; i <= 25; i++) {
    const ob = {
      id: i,
      value: i * 100,
      description: `Descrição do item ${i}`,
    };

    arr.push(ob);
  }
  return NextResponse.json(arr);
};

export { list as GET, create as POST };
