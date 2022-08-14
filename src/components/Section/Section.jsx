import { Box } from 'Box';

export function Section({ title, children }) {
  return (
    <Box py="20px" as="section">
      {title && (
        <Box mb="20px" as="h2">
          {title}
        </Box>
      )}
      {children}
    </Box>
  );
}
