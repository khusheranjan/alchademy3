import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

function subs() {
  return (
    <div>
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader >
    <TableRow >
      <TableHead className="w-[100px]">Subjects</TableHead>
      <TableHead className="text-right">Lectures</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </div>
  )
}

export default subs