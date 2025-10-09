export const CardInfo = ({ title, children}) => {
    return (
        <div className="rounded-xl shadow p-6 bg-gray-700 flex flex-col items-center" >
            <div className="flex gap-2 mt-2 mb-4">
                <h2 className="font-bold text-gray-200 text-2xl" > { title }</h2>
            </div>
            <div className="flex gap-2 text-2xl font-bold text-gray-200 mt-4">
                { children }
            </div>
        </div>
    );
}

export const CardMeta = ({ title, valorAtual, meta }) => {
    const progresso = Math.min((valorAtual / meta) * 100, 100);
    return (
        <div className="rounded-xl shadow p-6 bg-gray-700 flex flex-col items-center">
            <h2 className="font-bold text-gray-200 text-lg" > { title }</h2>
            <div className="text-xl font-bold text-gray-200 mb-2">
                R$ {valorAtual.toLocaleString()} / R$ {meta.toLocaleString()}
            </div>

            {/*<progress value={valorAtual} max={meta}/>*/}
            <div className="w-1/2 bg-gray-200 rounded-full h-3 mb-2">
                <div className="bg-green-700 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progresso}%` }} />
            </div>
            <span className={"text-sm text-gray-200"}>
                {progresso < 100
                    ? ` ${progresso.toFixed(0)}% da meta atingida`
                    : "Meta concluída!"}
            </span>
        </div>
    );
}