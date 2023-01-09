import './Animal.css';

export default function Animal({ animal }) {
  return (
    <>
      <div className="animals" style={{ top: animal.top, left: animal.left }}>
        <p className="animalName">{animal.name}</p>
        {animal.type}
        {animal.says}
        <img src={`${process.env.PUBLIC_URL}/animals/${animal.type}.svg`} />
      </div>
    </>
  );
}
