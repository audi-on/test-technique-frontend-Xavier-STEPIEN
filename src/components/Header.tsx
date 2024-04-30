import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <div className="md:w-1/2 flex justify-center items-start bg-slate-100">
      <div className="flex items-center gap-4 p-10">
        <img
          src="https://dev-artworks.360.audion.fm/31661c58-c91b-4467-8b68-5611fcc2a7bd.jpg"
          width="145"
          alt=""
        />
        <div>
          <p className="text-2xl font-semibold">Ecorama</p>
          <p className="text-lg">Boursorama</p>
        </div>
      </div>
    </div>
  )
}