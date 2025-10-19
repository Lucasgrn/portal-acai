import { Button } from "antd";

export default function Home() {
  return (
    <div className="p-2">
      <h2 className="text-stone-900 text-xl">Cardápio</h2>
      <Button type="default" className="!bg-fuchsia-800 !text-white !p-4 !rounded-lg">Adicionar</Button>
    </div>
  );
}
