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

import { Registrar } from '@kui-shell/core'

export default (commandTree: Registrar) => {
  commandTree.listen('/test/sassy', () => {
    const sassy = document.createElement('div')
    sassy.classList.add('sassy')
    const hide = document.createElement('div')
    hide.classList.add('hide')
    hide.innerText = 'hi'
    sassy.appendChild(hide)
    return sassy
  })
}
