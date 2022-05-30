/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js

import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const EuiIconLogoElastic = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    data-type="logoElastic"
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <image id="image0" width="32" height="32" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZNJREFUeNrsVj1OwzAYNRXM/OyI9AbpQjdoF1aaG9ATFE+MLWMlJOgJaEemlhMQRiZyg1piYqKcoLwPfUhWRBu7tiNViqUnp43l9/y+H0eIbR1zpQ4IrvvsWBB2MF0CLSDKvVZACtzWo0h5E8AnvAZ6gOlpx4CEkIWTAD7xowWxPjKgCxGZi4ClY3jJgUZRSHY32HQGPPOzYIcoNzo5t+j5Chj4coDsbK+KLdZHHLLWXy6cPX1KEvZx0xz7EJCCvG1QLSRCgHzCgkhYAyL+zYdagBYhQf6K+YV/J6vIgwjgEP32BD75bN36EA4Itr0PfB0P35YEX1VgUy1Sq4r9sgX0uRrI/lGpOUDleHq4N+E8oD7wjhDcl+IA3x3Tu4sjmrvcB3rcuJz7gOJGpNY0oikQa38/YL301YqJYA6ijO391t6dsN35ERdtukkIYpON2bGkaFEtYBkmJt8EIQRQeOom3wK2Icg4m8+1G08/MRGPQJzaqLURsMDmg1zJxbaE3vqAduk4jVBJWAmoBGyPgGr8CDAADEiNSND9wzcAAAAASUVORK5CYII=" />
  </svg>
);

export const icon = EuiIconLogoElastic;
