import dayjs from "dayjs";

export const formatarDataHora1 = (dataHoraIso) => {
    const data = new Date(dataHoraIso);
    return data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}
export const formatarDataHora = (dataHoraIso) => {
    return dayjs(dataHoraIso).format("DD/MM/YYYY - HH:mm");
}