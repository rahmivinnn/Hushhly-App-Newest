// Client utilities to call Netlify Functions for AI features

export async function streamAIChat(
  message: string,
  history: any[] = [],
  onToken: (t: string) => void,
  onDone?: () => void
): Promise<void> {
  const res = await fetch('/.netlify/functions/ai-chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history })
  })
  if (!res.ok || !(res as any).body) throw new Error('Failed to start AI chat stream')

  const reader = (res as any).body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop() || ''
    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const token = line.slice(6)
        if (token && token !== 'end') onToken(token)
      }
      // ignore other events
    }
  }
  if (onDone) onDone()
}

export async function generateMoodPlan(mood: string, days: number = 7) {
  const res = await fetch('/.netlify/functions/mood-plan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mood, days })
  })
  if (!res.ok) throw new Error('Failed to generate mood plan')
  return res.json()
}