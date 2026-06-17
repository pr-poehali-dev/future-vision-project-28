export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/2325d1eb-09fb-480f-9614-31ceb6bc32e0/files/886cc474-b49f-4d32-b67c-29d60da42211.jpg"
          alt="Звёздная карта в рамке на стене"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Память о важном моменте</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          День рождения, свадьба, первая встреча — мы рассчитываем точное расположение звёзд на эту дату и место.
          Уникальная карта, которой больше нет ни у кого в мире.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Заказать карту
        </button>
      </div>
    </div>
  );
}