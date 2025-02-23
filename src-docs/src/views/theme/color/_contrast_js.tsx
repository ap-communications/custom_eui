import React, { FunctionComponent } from 'react';
import chroma from 'chroma-js';

import {
  EuiText,
  EuiFlexGrid,
  EuiBadge,
  EuiCopy,
  EuiFlexItem,
  useEuiTheme,
  EuiPanel,
  EuiHorizontalRule,
} from '../../../../../src';
import { _EuiThemeColorsMode } from '../../../../../src/global_styling/variables/colors';

import { getContrastRatings } from './_contrast_utilities';
import { brandKeys, brandTextKeys, shadeKeys, textKeys } from './_color_js';

const textColors = [...textKeys, 'ghost', 'ink'];
const allowedColors = [...brandKeys, ...shadeKeys, 'ghost', 'ink'];
const textVariants = [...brandTextKeys, ...textColors];

type ColorSection = {
  color: keyof _EuiThemeColorsMode;
  colorValue?: string;
  minimumContrast: string | number;
  showTextVariants: boolean;
  matchPanelColor?: boolean;
  hookName?: string;
};

export const ColorSectionJS: FunctionComponent<ColorSection> = ({
  color,
  colorValue: _colorValue,
  minimumContrast,
  showTextVariants,
  matchPanelColor,
  hookName,
}) => {
  const { euiTheme } = useEuiTheme();
  const colorsForContrast = showTextVariants ? textVariants : allowedColors;

  function colorIsCore(color: string) {
    return brandKeys.includes(color) || brandTextKeys.includes(color);
  }

  const colorValue = _colorValue || euiTheme.colors[color];

  return (
    <EuiPanel
      color="transparent"
      hasBorder={false}
      paddingSize={matchPanelColor ? 'l' : 'none'}
      style={{
        background: matchPanelColor ? colorValue : undefined,
      }}
    >
      <EuiText size="xs">
        <EuiFlexGrid columns={2} direction="column" gutterSize="s">
          {showTextVariants && colorIsCore(colorValue) && (
            <ColorsContrastItem
              foreground={`${color}Text`}
              background={'body'}
              minimumContrast={minimumContrast}
            />
          )}
          {colorsForContrast.map((color2) => {
            if (colorIsCore(colorValue) && colorIsCore(color2)) {
              // i.e. don't render if both are core colors
              return;
            }
            return (
              <ColorsContrastItem
                foreground={color2}
                background={_colorValue ? colorValue : color}
                key={color2}
                minimumContrast={minimumContrast}
                styleString={hookName && `${hookName}('${color}')`}
              />
            );
          })}
        </EuiFlexGrid>
      </EuiText>
    </EuiPanel>
  );
};

type ColorsContrastItem = {
  foreground: string;
  background: string;
  minimumContrast: string | number;
  styleString?: string;
};

const ColorsContrastItem: FunctionComponent<ColorsContrastItem> = ({
  foreground,
  background,
  minimumContrast,
  styleString,
}) => {
  const { euiTheme } = useEuiTheme();
  const backgroundColorIsToken =
    euiTheme.colors[background as keyof _EuiThemeColorsMode];
  const backgroundColor = backgroundColorIsToken || background;
  const foregroundColorIsToken =
    euiTheme.colors[foreground as keyof _EuiThemeColorsMode];
  const foregroundColor = foregroundColorIsToken || foreground;
  const backgroundIsBody = background === 'body';

  const contrast = chroma.contrast(backgroundColor, foregroundColor);

  if (!contrast || contrast < minimumContrast) {
    return <></>;
  }

  const { contrastRating, contrastRatingBadge } = getContrastRatings(
    contrast,
    foreground
  );

  const backgroundStyleString = styleString || `euiTheme.colors.${background}`;

  const contrastIsAcceptableToCopy = contrast >= 3;
  const textToCopy = backgroundIsBody
    ? `color: $\{euiTheme.colors.${foreground}};`
    : `background-color: $\{${backgroundStyleString}};
color: $\{euiTheme.colors.${foreground}};`;

  const beforeMessage = contrastIsAcceptableToCopy ? (
    <small>
      <code>{`euiTheme.colors.${foreground} / ${backgroundStyleString}`}</code>
      <EuiHorizontalRule margin="xs" />
      <kbd>Click</kbd> to copy CSS-in-JS configuration
    </small>
  ) : (
    <small>
      Cannot copy configuration because the contrast is not acceptable
    </small>
  );

  return (
    <EuiFlexItem className="eui-textCenter">
      <EuiCopy
        display="block"
        title={
          <span>
            {contrastRatingBadge} Contrast is {contrast.toFixed(1)}
          </span>
        }
        beforeMessage={beforeMessage}
        afterMessage={<small>Copied!</small>}
        textToCopy={textToCopy}
      >
        {(copy) => (
          // @ts-ignore Bad badge types
          <EuiBadge
            className="guideColorSection__button"
            iconType={contrastRating}
            onClick={contrastIsAcceptableToCopy ? copy : undefined}
            onClickAriaLabel={
              contrastIsAcceptableToCopy
                ? 'Click to copy CSS-in-JS configurations'
                : undefined
            }
            style={{
              backgroundColor: backgroundColor,
              color: foregroundColor,
            }}
          >
            {sanitizeColorName(foreground)}
          </EuiBadge>
        )}
      </EuiCopy>
    </EuiFlexItem>
  );
};

function sanitizeColorName(color: string) {
  // Add space between caplital letters
  const spaced = color.replace(/([A-Z])/g, ' $1').trim();
  // Capitalize first letter
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}
