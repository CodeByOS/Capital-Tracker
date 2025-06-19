"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { accountSchema } from "@/app/lib/schema";

const CreateAccountDrawer = ({ children }) => {
  const [open, setOpen] = useState(false);
  useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      type: "CURRENT",
      balance: "",
      isDefault: false,
    }
  });
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{ children }</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
      <div>
        <form></form>
      </div>
    </Drawer>
  )
}

export default CreateAccountDrawer