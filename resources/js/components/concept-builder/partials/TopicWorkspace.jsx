import VideoSection from './VideoSection';
import LessonTabs from './LessonTabs';

export default function TopicWorkspace({ topic, onUpdateTopic }) {
    if (!topic) {
        return (
            <main className="flex-1 bg-background flex items-center justify-center">
                <div className="text-center">
                    <p className="text-sm font-semibold text-foreground">
                        No lesson selected
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                        Add a lesson from the sidebar to start building.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="flex-1 overflow-hidden bg-background flex flex-col">
            <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-5xl mx-auto space-y-5">
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                            Selected Lesson
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-1">
                            {topic.title || 'Untitled lesson'}
                        </h2>

                        <p className="text-sm text-muted-foreground mt-1">
                            {topic.description || 'No description yet.'}
                        </p>
                    </div>

                    <VideoSection
                        topic={topic}
                        onUpdateTopic={onUpdateTopic}
                    />

                    <LessonTabs
                        topic={topic}
                        onUpdateTopic={onUpdateTopic}
                    />
                </div>
            </div>
        </main>
    );
}