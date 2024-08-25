import { Search, SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá William!</h2>
        <p>Sexta-feira, 23 de agosto. </p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca... " />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="roudned-xl relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW barber"
            src="/banner-01.png"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
