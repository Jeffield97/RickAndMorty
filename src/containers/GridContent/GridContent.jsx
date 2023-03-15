import React from "react";
import getRandomNumber from "../../assets/utils/getRandomNumber";
import CardCharacter from "../../components/CardCharacter/CardCharacter";

const GridContent = ({ location }) => {
  return (
    <div className="flex gap-1 w-full flex-wrap justify-center">
      {location &&
        location.residents.map((resident) => (
          <CardCharacter key={resident} urlCharacter={resident}></CardCharacter>
        ))}
    </div>
  );
};

export default GridContent;
