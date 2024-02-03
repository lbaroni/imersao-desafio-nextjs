// import Image from "next/image";
// import styles from "./page.module.css";

import { Button, Card, Typography } from "@mui/material";
import { Post } from "./models";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const posts: Post[] = [
  { 
    userId: 1,
    id: 1,
    title: "Post mockado para testes",
    body: "Texto digitado para testes de leiura do body do post.",
  }
];

export default function Home() {
  return (
    <main>
      <div>
         <h1>Hello world!</h1>
         <Button variant="contained" color="primary">botão</Button>
      </div>
      <div>
        <Grid2 container spacing={2}>
          {posts.map((post, key) => (
              <Grid2 key={key}>
                <Card>
                  <Typography gutterBottom variant="h5">
                    {post.title}
                  </Typography>
                </Card>
              </Grid2>
            )

          )}
        </Grid2>
      </div>
    </main>
  );
}
