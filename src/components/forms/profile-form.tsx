"use client"
import { EditUserProfileSchema } from "@/lib/types"
import React, { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Loader2 } from "lucide-react"
type Props = {
    user: any
    onUpdate?: any
}

function ProfileForm({ user, onUpdate }: Props) {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: "onChange",
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: user.name,
            email: user.email,
        },
    })

    const handleSubmit = async (values: z.infer<typeof EditUserProfileSchema>) => {
        setIsLoading(true)
        await onUpdate(values.name)
        setIsLoading(false)
    }

    useEffect(() => {
        form.reset({ name: user.name, email: user.email })
    }, [form, user])
    return (
        <Form {...form}>
            <form className="flex flex-col gap-6" onSubmit={() => {}}>
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">User full name</FormLabel>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="self-start hover:bg-[#2F006B] hover:text-white">
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving
                        </>
                    ) : (
                        "Save User Settings"
                    )}
                </Button>
            </form>
        </Form>
    )
}

export default ProfileForm
