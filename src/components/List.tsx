import type { FC, FocusEvent } from 'react';
import { useState, useEffect } from 'react';
import type { Episode } from '../models/episode.ts';

interface ListProps {
  data:  Episode[];
}

export const List: FC<ListProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState<Episode[]>(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleOnBlur = ({ target }: FocusEvent<HTMLInputElement>) => {
    setFilteredData(target.value
      ? data.filter(({ title }) => title.toLowerCase().includes(target.value.toLowerCase()))
      : data
    )
  }

  return (
    <div className="md:w-1/2">
      <input type="text" className="border m-1" onChange={handleOnBlur} />
      {filteredData.map((d, index) => (
        <div className="flex p-2 gap-2 items-start" key={index}>
          <img src={d.artworkUrl} alt="" width="60" />
          <div className="flex flex-col">
            <span className="line-clamp-2 font-bold">{d.title}</span>
            <div>
              <span>{new Date(d.publicationDate).toLocaleDateString('fr', {dateStyle: "long"})}</span>
              <span>{d.durationInSeconds} s</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}