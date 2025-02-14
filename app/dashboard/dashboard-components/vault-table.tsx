import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const vaults = [
  {
    receipient: "vitalik.eth", 
    amount: "$50/month",
    date: "Jan 25",
    state: "Paused",
    action: "Pause",
  },
  {
    receipient: "Blis.eth", 
    amount: "$400/year",
    date: "Jan 11",
    state: "Active",
    action: "Pause",
  },
  {
    receipient: "Legacy.eth", 
    amount: "$20/week",
    date: "Mar 14",
    state: "Paused",
    action: "Pause",
  },
  {
    receipient: "Vivarium.eth", 
    amount: "$5/Day",
    date: "Dec 08",
    state: "Active",
    action: "Pause",
  },

]

export function VaultTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
          Recipient (ENS)</TableHead>
          <TableHead>Amount/Interval</TableHead>
          <TableHead>Next Payment</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {vaults.map((vault) => (
          <TableRow key={vault.receipient}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
                <div>
                  <div className="font-medium">{vault.receipient}</div>
                  
                </div>
              </div>
            </TableCell>
            <TableCell className="text-green-500">{vault.amount}</TableCell>
            <TableCell>{vault.date}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                  vault.state === "Paused" ? "bg-yellow-500/10 text-yellow-500" : "bg-green-500/10 text-green-500"
                }`}
              >
                {vault.state}
              </span>
            </TableCell>
            <TableCell>{vault.action}</TableCell>
            
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

