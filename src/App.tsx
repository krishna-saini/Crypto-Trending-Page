import Card from "./Component/Card";

import { data } from "./data";

function App() {
  return (
    <main className="bg-slate-800">
      <section className="container mx-auto">
        <div className="py-8">
          <h1 className="flex items-center justify-start gap-4">
            <span className="text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </span>
            <span className="text-mono text-lg font-bold text-slate-100">
              Trending coins
            </span>
          </h1>
        </div>
        <div className="flex">
          {data.map((e, i) => {
            return <Card key={i} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
