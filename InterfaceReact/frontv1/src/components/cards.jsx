export const genericCard = ({ title, children}) => {
    return (
        <div className="border border-lg shadow p-4 bg-white" >
            <h2 className="font-bold text-lg mb-2" > { title }</h2>
            <div> { children } </div>
        </div>
    );
}