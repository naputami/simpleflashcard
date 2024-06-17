import { Card } from "@/components/Card";
import { getData } from "@/service";
import { PageTemplate } from "@/components/PageTemplate";
import Link from "next/link";
import { DeleteCardDialog } from "@/components/DeleteCardDialog";
import { RememberCardDialog } from "@/components/RememberCardDialog";
import { clearServiceCache } from "@/action";
export default async function Page() {
  const { data } = await getData();
  clearServiceCache();

  return (
    <PageTemplate>
        <DeleteCardDialog />
        <RememberCardDialog />
        <div className="container mx-auto mt-4 p-4">
          <section className="flex justify-center sm:justify-end w-full">
            <Link href="/newcard">
              <button className="btn btn-primary btn-wide">
                Tambah flash card baru
              </button>
            </Link>
          </section>
          <section className="p-2 border border-accent rounded-xl mt-4">
            <h2 className="font-semibold text-lg">
              Cara menggunakan aplikasi ini:
            </h2>
            <ul className="list-disc ml-6">
              <li>Klik tambah flash card, isi form-nya, dan submit</li>
              <li>Pilih kata yang ingin kamu pelajari</li>
              <li>
                Coba tebak dulu makna dari kata tersebut sebelum kamu klik
                "Tampilkan arti kata"
              </li>
              <li>
                Kalau benar, kamu bisa klik tombol "sudah hafal". Kalau salah
                atau kamu tidak tahu sama sekali artinya bisa klik tombol belum
                hafal.
              </li>
            </ul>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-5 mx-auto justify-items-center mt-16">
            {data.map((item) => (
              <Card
                key={item._id}
                data={item}
              />
            ))}
          </section>
        </div>
    </PageTemplate>
  );
}
