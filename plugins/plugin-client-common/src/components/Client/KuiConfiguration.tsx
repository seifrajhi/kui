/*
 * Copyright 2020 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import InputProps from './props/Input'
import InterfaceProps from './props/Interface'
import SessionProps from './props/Session'
import BrandingProps from './props/Branding'
import FeatureFlags from './props/FeatureFlags'
import { ThemeProperties } from '@kui-shell/core/mdist/api/Themes'

type TestingFlags = {
  _for_testing_: number
}

type KuiConfiguration = Partial<ThemeProperties> &
  Partial<InputProps> &
  Partial<InterfaceProps> &
  Partial<SessionProps> &
  Partial<BrandingProps> &
  Partial<FeatureFlags> &
  Partial<TestingFlags>

export default KuiConfiguration
