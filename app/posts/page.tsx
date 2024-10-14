import printerData from "../../public/data/data.json";
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

interface IPrinter {
  IdPrinter: number;
  Nama: string;
  Tipe: string;
  Kecepatan: string;
  Konektivitas: string;
  Toner: string;
  Harga: number;
}

const PrinterList = () => {
  const printers: IPrinter[] = printerData["Printer"];

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">DAFTAR PRINTER</h1>
      {printers.map((printer) => (
        <CardList key={printer.IdPrinter}>
          <p>Nama: {printer.Nama}</p>
          <p>Tipe: {printer.Tipe}</p>
          <p>Kecepatan: {printer.Kecepatan}</p>
          <p>Konektivitas: {printer.Konektivitas}</p>
          <p>Toner: {printer.Toner}</p>
          <p>Harga: Rp{printer.Harga.toLocaleString()}</p>
          <ViewUserButton userId={printer.IdPrinter} />
        </CardList>
      ))}
    </>
  );
};

export default PrinterList;
