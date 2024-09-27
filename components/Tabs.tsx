"use client";

import { articles, videoLessons } from "@/Data/data";
import { Lesson } from "@/Types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, PlayCircle } from "lucide-react";
import { useState } from "react";
import LessonCard from "./LessonCard";
import { TabsBtn, TabsContent, TabsProvider } from "./tab";

const Tabs = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  return (
    <>
      <TabsProvider defaultValue={"videos"} wobbly={true}>
        <div className="mt-2 flex justify-center">
          <div className="flex w-fit items-center rounded-md border bg-[#f0f0f0] p-1 text-deep_blue">
            <TabsBtn value="videos">
              <span className="relative z-[2] uppercase">Video Lessons</span>
            </TabsBtn>
            <TabsBtn value="articles">
              <span className="relative z-[2] uppercase">Articles</span>
            </TabsBtn>
          </div>
        </div>

        <TabsContent value="videos">
          <div className="flex flex-col items-center justify-center gap-6">
            {videoLessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                icon={<PlayCircle className="h-8 w-8 text-blue-500" />}
                title={lesson.title}
                description={lesson.description}
                difficulty={lesson.difficulty}
                type="video"
                duration={10}
                onStart={() => setSelectedLesson(lesson)}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="articles">
          <div className="flex flex-col items-center gap-6">
            {articles.map((lesson) => (
              <LessonCard
                key={lesson.id}
                icon={<FileText className="h-8 w-8 text-blue-500" />}
                title={lesson.title}
                description={lesson.description}
                duration={5}
                type="reading"
                onStart={() => setSelectedLesson(lesson)}
              />
            ))}
          </div>
        </TabsContent>
      </TabsProvider>
      <Dialog
        open={selectedLesson !== null}
        onOpenChange={(open) => !open && setSelectedLesson(null)}
      >
        <DialogContent className="h-[80vh] max-w-4xl bg-white">
          <DialogHeader>
            <DialogTitle>{selectedLesson?.title}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-full">
            {selectedLesson?.id.startsWith("v") && (
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedLesson.content}`}
                  title={selectedLesson.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {selectedLesson?.id.startsWith("a") && (
              <div className="prose max-w-none">
                {(typeof selectedLesson.content === "string"
                  ? selectedLesson.content.split("\n")
                  : selectedLesson.content
                ).map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {selectedLesson?.id.startsWith("i") && (
              <div className="text-center">
                <p>{selectedLesson.content}</p>
                <p className="mt-4">
                  This is where an interactive tutorial would be embedded.
                </p>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Tabs;
