import './Animal.css';

export default function Animal({ animal }) {
  return (
    <>
      <div className="animal" style={{ top: animal.top, left: animal.left }}>
        <p className="name">{animal.name}</p>
        {animal.says}
        <img src={`${process.env.PUBLIC_URL}/animals/${animal.type}.svg`} />
      </div>
    </>
  );
}
