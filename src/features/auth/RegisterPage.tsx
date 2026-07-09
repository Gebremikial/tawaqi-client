import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'

export const RegisterPage = () => {
  return (
    <section className="page-stack auth-page">
      <div className="card auth-card">
        <h1>Create an account</h1>
        <p className="subtle">Join the TAWAQI community as a talent, recruiter, or media partner.</p>
        <form className="stacked-form">
          <Input label="Full name" name="name" placeholder="Your full name" />
          <Input label="Email" name="email" placeholder="you@example.com" type="email" />
          <Input label="Password" name="password" placeholder="Create a password" type="password" />
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    </section>
  )
}
