import { useEffect, useState } from "react";
import { getLongData } from "./utils/utils";
import type { Episode } from "./models/episode";
import { List } from './components/List.tsx';
import { Header } from './components/Header.tsx';

export const App = () => {
  const [data, setData] = useState<Episode[]>([]);

  useEffect(() => {
    getLongData().then((response) => setData(response));
  }, []);

  return (
    <div className="md:flex md:flex-row-reverse">
      <Header />
      <List data={data} />
    </div>
  );
};
