import { cn } from "@/lib/utils";

interface Props{
    title: string,
    description:string,
    ClassName: string,
}


const SimpleCard: React.FC<Props> =({title, description, ClassName}) =>{
    return(
        <div className={cn("bg-white aspect-auto flex flex-col gap-y-4 items-center justify-center rounded bg-[#ffffff0e] p-2 ring-1 ring-slate-700", ClassName)}>
            <h3 className={cn("text-[16px] max-md:text-[14px] text-[#99E39E] text-center font-medium")}>{title}</h3>
            <p className="text-center max-md:text-[10px]">{description}</p>
        </div>
    )
}

export default SimpleCard;