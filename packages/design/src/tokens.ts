export const colors = {
  // Monochromatic blue scale
  blue: {
    25:  '#F5F9FF',
    50:  '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#2563EB', // primary
    600: '#1D4ED8',
    700: '#1E40AF',
    800: '#1E3A8A',
    900: '#0B1120'  // deep background in dark mode
  },

  // Analogous accents
  cyan: {
    400: '#22D3EE',
    500: '#06B6D4'
  },
  indigo: {
    400: '#6366F1',
    500: '#4F46E5'
  },

  // Triadic + semantic
  purple: {
    400: '#A855F7',
    500: '#8B5CF6'
  },
  green: {
    400: '#4ADE80',
    500: '#22C55E'
  },
  orange: {
    400: '#FB923C',
    500: '#F97316'
  },
  red: {
    400: '#F87171',
    500: '#EF4444'
  },
  gray: {
    25:  '#F9FAFB',
    50:  '#F3F4F6',
    100: '#E5E7EB',
    200: '#D1D5DB',
    300: '#9CA3AF',
    400: '#6B7280',
    500: '#4B5563',
    600: '#374151',
    700: '#1F2933',
    800: '#111827',
    900: '#020617'
  }
};

export const semantic = {
  // Brand
  brand: {
    primary: colors.blue[500],
    primarySoft: colors.blue[100],
    primaryStrong: colors.blue[600]
  },

  // Backgrounds
  background: {
    appLight: colors.gray[25],
    appDark: colors.gray[900],
    surfaceLight: '#FFFFFF',
    surfaceDark: colors.gray[800],
    elevatedDark: colors.blue[900]
  },

  // Text
  text: {
    primaryLight: colors.gray[900],
    secondaryLight: colors.gray[600],
    primaryDark: '#F9FAFB',
    secondaryDark: colors.gray[300],
    muted: colors.gray[400]
  },

  // Status
  status: {
    healthy: colors.green[500],      // nodes healthy
    degraded: colors.orange[500],    // nodes degraded
    error: colors.red[500],          // nodes error
    info: colors.blue[500],
    warningBg: colors.orange[400],
    errorBg: colors.red[400]
  },

  // Borders & outlines
  border: {
    subtleLight: colors.gray[100],
    subtleDark: colors.gray[700],
    strongLight: colors.gray[200],
    strongDark: colors.gray[600],
    focus: colors.blue[500]
  }
};

export const components = {
  button: {
    primary: {
      bg: semantic.brand.primary,
      bgHover: colors.blue[600],
      text: '#FFFFFF'
    },
    secondary: {
      bg: 'transparent',
      bgHover: colors.blue[900],
      border: colors.blue[500],
      text: semantic.brand.primary
    },
    ghost: {
      bg: 'transparent',
      bgHover: colors.gray[800],
      text: semantic.text.primaryDark
    },
    danger: {
      bg: colors.red[500],
      bgHover: colors.red[400],
      text: '#FFFFFF'
    }
  },

  tag: {
    default: {
      bg: colors.gray[100],
      text: colors.gray[700]
    },
    channelSlack: {
      bg: colors.cyan[500],
      text: '#0B1120'
    },
    channelDiscord: {
      bg: colors.indigo[500],
      text: '#EEF2FF'
    },
    channelWhatsApp: {
      bg: colors.green[500],
      text: '#022C22'
    },
    channelTelegram: {
      bg: colors.cyan[400],
      text: '#022C22'
    },
    channelWebChat: {
      bg: colors.blue[500],
      text: '#EFF6FF'
    }
  },

  // Example tokens for charts / diagrams (control plane → nodes → tools)
  diagrams: {
    controlPlane: colors.blue[500],
    nodeMesh: colors.purple[500],
    toolsAndOutputs: colors.green[500]
  }
};

export type ColorTokens = typeof colors;
export type SemanticTokens = typeof semantic;
export type ComponentTokens = typeof components;
