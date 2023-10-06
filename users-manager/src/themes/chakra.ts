import { extendTheme } from '@chakra-ui/react';

// Common
import { fontSizes } from './commons/fontSizes';
import { fonts } from './commons/fonts';
import { colors } from './commons/colors';
import { lineHeights } from './commons/lineHeights';
import { space } from './commons/spacing';

// Components
import { Text } from './components/text';
import { Badge } from './components/badge';
import { Button } from './components/button';
import { Modal } from './components/modal';
import { Input } from './components/input';
import { Form } from './components/form';

const overrides = {
  components: {
    Text,
    Badge,
    Button,
    Modal,
    Input,
    Form
  },
  fontSizes,
  fonts,
  colors,
  space,
  lineHeights
};

export const CHAKRA_THEME = extendTheme(overrides);
