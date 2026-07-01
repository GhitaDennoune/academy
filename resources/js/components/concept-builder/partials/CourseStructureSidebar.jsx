import { Plus, BookOpen, Trash2, Video, FileText, HelpCircle, Award } from 'lucide-react';

export default function CourseStructureSidebar({
    concept,
    topics = [],
    activeTopicId,
    onSelectTopic,
    onAddTopic,
}) {
    return (
        <aside className="w-[310px] bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col shrink-0">
            {/* <div className="p-4 border-b border-sidebar-border">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                    Course Structure
                </p>
                <h2 className="text-sm font-semibold truncate">
                    {concept?.title || 'Untitled Concept'}
                </h2>
            </div> */}

            <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {topics.map((topic, index) => {
                    const isActive = activeTopicId === topic.id;

                    return (
                        <button
                            key={topic.id}
                            type="button"
                            onClick={() => onSelectTopic(topic.id)}
                            className={`w-full text-left rounded-xl border p-3 transition ${
                                isActive
                                    ? 'bg-sidebar-accent border-alpha'
                                    : 'bg-transparent border-transparent hover:bg-sidebar-accent hover:border-sidebar-border'
                            }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center shrink-0">
                                    <BookOpen className="w-4 h-4" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">
                                        Lesson {String(index + 1).padStart(2, '0')}
                                    </p>

                                    <p className="text-xs font-semibold truncate mt-0.5">
                                        {topic.title}
                                    </p>

                                    <div className="flex items-center gap-1.5 mt-2 text-muted-foreground">
                                        <Video className={`w-3.5 h-3.5 ${topic.hasVideo ? 'text-good' : ''}`} />
                                        <FileText className={`w-3.5 h-3.5 ${topic.resourcesCount > 0 ? 'text-alpha' : ''}`} />
                                        <HelpCircle className={`w-3.5 h-3.5 ${topic.hasQuiz ? 'text-alpha' : ''}`} />
                                        <Award className={`w-3.5 h-3.5 ${topic.hasExercise ? 'text-good' : ''}`} />
                                    </div>
                                </div>

                                <span
                                    onClick={(e) => e.stopPropagation()}
                                    className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-error"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </span>
                            </div>
                        </button>
                    );
                })}
            </div>

            <div className="p-3 border-t border-sidebar-border">
                <button
                    onClick={onAddTopic}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-alpha text-xs font-semibold"
                >
                    <Plus className="w-4 h-4" />
                    Add Lesson
                </button>
            </div>
        </aside>
    );
}