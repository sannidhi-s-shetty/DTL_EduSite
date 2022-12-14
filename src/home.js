import React from "react";
import poster from "./images/poster.png"
import { MantineProvider } from '@mantine/core';
import { BackgroundImage, Card, Image, Text, Box } from '@mantine/core';
function Home() {
    return (
        <div  className="home">
        <MantineProvider withGlobalStyles withNormalizeCSS>
        
        
    <Card
      shadow="sm"
      p="xl"
      component="a"
      href=""
      target="_blank"
    >
      <Card.Section>
        <Image
          src={poster}
          height={600}
          alt="poster"
        />
      </Card.Section>

      <Text weight={500} size="lg" mt="md">
        Welcome to ALGEBRA HELPER
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
        Ultimate guide to solve Algebra problems
      </Text>
      <div className="video-container">
                <iframe title = "video1" src="https://www.youtube.com/embed/k3evtUkE66c" className="video-layout"></iframe>
                </div>
    </Card>

       
        </MantineProvider>
        </div>
        
    );
}

export default Home;
