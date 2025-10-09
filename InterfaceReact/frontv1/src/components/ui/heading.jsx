export const Cabecalho = ({ children, text }) => {

    return (
        <div>
            <h2 className={"text-gray-200 uppercase text-2xl font-semibold"}>
                {text}
            </h2>
            {children}
        </div>
    );
}