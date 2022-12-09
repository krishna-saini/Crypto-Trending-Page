interface urlProp {
  src: string;
}

const Icon: React.FC<urlProp> = ({ src }) => {
  return (
    <div className="absolute -top-12 left-24 z-0 grid h-24 w-24 place-content-center overflow-hidden rounded-full border-8 border-space-500 bg-gradient-to-t from-slate-900 to-slate-800 p-5">
      <img src={src} className="rounded-full" alt="" />
      <div
        style={{ backgroundImage: `url(${src})` }}
        className="absolute -inset-0 -z-10 rounded-full bg-cover bg-no-repeat opacity-25 blur"
      />
    </div>
  );
};

export default Icon;
