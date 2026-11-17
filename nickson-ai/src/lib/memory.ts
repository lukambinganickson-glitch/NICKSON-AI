export type MemoryItem = {
  id: string;
  content: string;
  category: string;
  createdAt: string;
};

const memories: MemoryItem[] = [];

export function saveMemory(
  content: string,
  category = "general"
): MemoryItem {
  const memory: MemoryItem = {
    id: crypto.randomUUID(),
    content,
    category,
    createdAt: new Date().toISOString(),
  };

  memories.push(memory);
  return memory;
}

export function getMemories(): MemoryItem[] {
  return [...memories];
}

export function searchMemories(query: string): MemoryItem[] {
  const term = query.toLowerCase();

  return memories.filter((memory) =>
    memory.content.toLowerCase().includes(term)
  );
}

export function deleteMemory(id: string): boolean {
  const index = memories.findIndex((memory) => memory.id === id);

  if (index === -1) return false;

  memories.splice(index, 1);
  return true;
}
