import ChatBox from "./ChatBox";
import { useThreadContext } from "@/shared/context/ThreadContext";

export default function Chat() {
  const { currentThreadId } = useThreadContext();

  return <ChatBox threadId={currentThreadId} />;
}
