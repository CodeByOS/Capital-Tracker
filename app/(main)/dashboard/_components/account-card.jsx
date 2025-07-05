"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import { toast } from "sonner";

import { updateDefaultAccount } from "@/actions/accounts";
import useFetch from "@/hooks/use-fetch";

import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AccountCard({ account }) {
  const { name, type, balance, id, isDefault } = account;

  const {
    loading: updateDefaultLoading,
    fn: updateDefaultFn,
    data: updatedAccount,
    error,
  } = useFetch(updateDefaultAccount);

  const handleDefaultChange = async (e) => {
    e.preventDefault();

    if (isDefault) {
      toast.warning("You need at least 1 default account");
      return;
    }

    await updateDefaultFn(id);
  };

  useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Default account updated successfully");
    }
  }, [updatedAccount]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update default account");
    }
  }, [error]);

  return (
    <Card className="hover:shadow-md transition-shadow group relative rounded-xl border border-muted bg-background mt-4">
      <div className="p-4 space-y-4">
        {/* Header: Name & Switch */}
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium capitalize text-foreground">
            {name}
          </CardTitle>
          <Switch
            checked={isDefault}
            onClick={handleDefaultChange}
            disabled={updateDefaultLoading}
          />
        </div>

        {/* Main: Balance & Type */}
        <Link href={`/account/${id}`} className="block space-y-1">
          <CardContent className="p-0">
            <div className="text-3xl font-bold text-primary">
              ${parseFloat(balance).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground capitalize">
              {type.toLowerCase()} account
            </p>
          </CardContent>
        </Link>

        {/* Footer: Income/Expense Icons */}
        <CardFooter className="flex justify-between text-sm text-muted-foreground p-0 pt-2">
          <div className="flex items-center">
            <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
            Income
          </div>
          <div className="flex items-center">
            <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
            Expense
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
