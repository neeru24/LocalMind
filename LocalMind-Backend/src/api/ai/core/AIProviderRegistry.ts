// src/api/ai/core/AIProviderRegistry.ts

import { AIProvider } from './AIProvider'
import { AICapability } from './types'

class AIProviderRegistry {
  private providers = new Map<string, AIProvider>()

  register(provider: AIProvider) {
    this.providers.set(provider.name, provider)
  }

  get(name: string): AIProvider | undefined {
    return this.providers.get(name)
  }

  findByCapability(capability: AICapability): AIProvider[] {
    return Array.from(this.providers.values()).filter(p =>
      p.supports(capability)
    )
  }

  list(): AIProvider[] {
    return Array.from(this.providers.values())
  }
}

export const aiProviderRegistry = new AIProviderRegistry()
