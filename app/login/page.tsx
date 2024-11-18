"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MouseEvent } from "react"
import { useRouter } from "next/navigation"

export default function Page() {

    const router = useRouter()

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        const token = 'your_token_value';
        const userDetails = { name: 'John Doe', email: 'john@example.com' };

        document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; secure; samesite=Strict`;
        document.cookie = `userDetails=${JSON.stringify(userDetails)}; path=/; max-age=${60 * 60 * 24 * 7}; secure; samesite=Strict`;

        router.push('/auth/dashboard')
    }

    return (
        <div className="flex h-screen w-full items-center justify-center px-4">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link href="#" className="ml-auto inline-block text-sm underline">
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button onClick={(event: MouseEvent<HTMLButtonElement>) => handleSubmit(event)} type="submit" className="w-full">
                            Login
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="#" className="underline">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}