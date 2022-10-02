import Main from "../../components/main";
import { Grid, Input, Spacer, Button, Card, Text } from "@nextui-org/react";
import { getCsrfToken } from "next-auth/react";

export default function SignIn({ csrfToken }) {
  return (
    <Main>
      <Grid.Container justify="center" className="m-auto">
        <Grid>
          <Card variant="bordered">
            <Card.Body>
              <form
                method="post"
                action="/api/auth/callback/credentials"
                className="flex flex-col"
              >
                <Input
                  name="csrfToken"
                  initialValue={csrfToken}
                  className="hidden"
                />
                <Input name="username" placeholder="Username" size="lg" />
                <Spacer />
                <Input.Password
                  name="password"
                  placeholder="Password"
                  size="lg"
                />
                <Spacer />
                <Button type="submit" shadow size="lg">
                  Login
                </Button>
              </form>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Main>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
