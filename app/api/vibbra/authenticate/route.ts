import { NextResponse } from "next/server";

const handler = async (req: any) => {
  return NextResponse.json({
    token: "23d45q67v89n01w2e3r45t6y78u90i",
    user: {
      name: "John Doe",
      email: "johndoe@example.com",
      login: "johndoe",
      password: "password123",
      location: {
        lat: -23.528822,
        lng: -46.712677,
        address: "Avenida Francisco Matarazzo, 1705",
        city: "São Paulo",
        state: "SP",
        zip_code: "05001-200",
      },
    },
  });
};

export { handler as POST };
